import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      name,
      email,
      phone,
      address,
      category,
      priority = 'MEDIUM',
      description,
      scheduledDate
    } = body

    // Validate required fields
    if (!name || !email || !phone || !address || !category || !description) {
      return NextResponse.json(
        { error: 'جميع الحقول المطلوبة يجب أن تكون مملوءة' },
        { status: 400 }
      )
    }

    // Create service request
    const serviceRequest = await prisma.serviceRequest.create({
      data: {
        title: `طلب ${category}`,
        description,
        category,
        priority,
        address,
        phone,
        email,
        scheduledAt: scheduledDate ? new Date(scheduledDate) : null,
      },
    })

    return NextResponse.json({ 
      success: true, 
      data: serviceRequest,
      message: 'تم إرسال طلبكم بنجاح! سنتواصل معكم قريباً.'
    })

  } catch (error) {
    console.error('Error creating service request:', error)
    return NextResponse.json(
      { error: 'حدث خطأ في معالجة الطلب' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const status = searchParams.get('status')
    const category = searchParams.get('category')

    const skip = (page - 1) * limit

    const where: any = {}
    if (status) where.status = status
    if (category) where.category = category

    const [serviceRequests, total] = await Promise.all([
      prisma.serviceRequest.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      }),
      prisma.serviceRequest.count({ where }),
    ])

    return NextResponse.json({
      success: true,
      data: serviceRequests,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })

  } catch (error) {
    console.error('Error fetching service requests:', error)
    return NextResponse.json(
      { error: 'حدث خطأ في جلب البيانات' },
      { status: 500 }
    )
  }
} 