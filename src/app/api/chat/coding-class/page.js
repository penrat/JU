"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock, Users, Star, CheckCircle, Calendar, Video, Award, User } from 'lucide-react';
import Image from 'next/image';

export default function CodingClassSales() {
  const [selectedPackage, setSelectedPackage] = useState('basic');

  const packages = [
    {
      id: 'basic',
      name: 'คอร์สพื้นฐาน',
      price: '1,500',
      originalPrice: '2,500',
      duration: '4 สัปดาห์',
      sessions: '8 ครั้ง',
      features: [
        'เรียนรู้พื้นฐานการเขียนโปรแกรม',
        'ภาษา Python สำหรับผู้เริ่มต้น',
        'แบบฝึกหัดและโปรเจกต์เล็กๆ',
        'การบ้านและเฉลยแบบละเอียด',
        'เข้าถึงวิดีโอการสอนย้อนหลัง'
      ],
      popular: false,
      color: 'bg-gradient-to-br from-pink-100 to-rose-100',
      border: 'border-pink-300',
      button: 'bg-pink-600 hover:bg-pink-700',
      text: 'text-gray-800',
      header: 'from-pink-500 to-rose-500'
    },
    {
      id: 'intermediate',
      name: 'คอร์สกลาง',
      price: '2,800',
      originalPrice: '4,500',
      duration: '6 สัปดาห์',
      sessions: '12 ครั้ง',
      features: [
        'สร้างเว็บแอปพลิเคชันด้วย HTML/CSS/JavaScript',
        'เรียนรู้ Node.js และ Express',
        'ฐานข้อมูล MongoDB',
        'โปรเจกต์จริง 2 ชิ้น',
        'เข้าถึงวิดีโอการสอนย้อนหลัง',
        'การสนับสนุนจากผู้เชี่ยวชาญ',
        'ใบรับรองเมื่อจบหลักสูตร'
      ],
      popular: true,
      color: 'bg-gradient-to-br from-blue-100 to-indigo-100',
      border: 'border-blue-300',
      button: 'bg-blue-600 hover:bg-blue-700',
      text: 'text-gray-800',
      header: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'advanced',
      name: 'คอร์สระดับสูง',
      price: '4,500',
      originalPrice: '7,000',
      duration: '8 สัปดาห์',
      sessions: '16 ครั้ง',
      features: [
        'พัฒนาแอปพลิเคชันเต็มรูปแบบ',
        'React และ Next.js สำหรับ Frontend',
        'Node.js และ Express สำหรับ Backend',
        'ฐานข้อมูล PostgreSQL และ Redis',
        'ระบบ Deploy บน Cloud',
        'โปรเจกต์ Capstone 1 ชิ้น',
        'เข้าถึงวิดีโอการสอนย้อนหลัง',
        'การสนับสนุนจากผู้เชี่ยวชาญ',
        'ใบรับรองเมื่อจบหลักสูตร',
        'เข้าร่วม Workshop พิเศษ'
      ],
      popular: false,
      color: 'bg-gradient-to-br from-amber-100 to-orange-100',
      border: 'border-amber-300',
      button: 'bg-amber-600 hover:bg-amber-700',
      text: 'text-gray-800',
      header: 'from-amber-500 to-orange-500'
    }
  ];

  const benefits = [
    {
      icon: <Video className="w-8 h-8" />,
      title: 'เรียนออนไลน์',
      description: 'เรียนได้ทุกที่ ทุกเวลา สะดวกสบาย',
      link: '/video-learning',
      color: 'bg-pink-100',
      hoverColor: 'hover:bg-pink-200',
      textColor: 'text-pink-700'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'ใบรับรอง',
      description: 'ได้รับใบรับรองเมื่อจบหลักสูตร',
      link: '/certificates',
      color: 'bg-blue-100',
      hoverColor: 'hover:bg-blue-200',
      textColor: 'text-blue-700'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'ชุมชน',
      description: 'เข้าร่วมกลุ่มชุมชนนักพัฒนา',
      link: '/community',
      color: 'bg-yellow-100',
      hoverColor: 'hover:bg-yellow-200',
      textColor: 'text-yellow-700'
    }
  ];

  const instructors = [
    {
      id: 1,
      name: 'ดร.กุริญา ทาเทร์',
      title: 'หัวหน้าภาควิชาวิทยาการคอมพิวเตอร์',
      image: '/images/unnamed.png',
      description: 'ผู้เชี่ยวชาญด้านวิทยาการคอมพิวเตอร์ที่มีประสบการณ์การสอนมากกว่า 15 ปี ได้รับรางวัล Best Instructor Award จากสมาคมผู้พัฒนาซอฟต์แวร์ไทย 3 ปีซ้อน',
      students: '5,000+',
      rating: '4.9/5.0'
    },
    {
      id: 2,
      name: 'ผศ.ณรงค์พล ชูหนู',
      title: 'ผู้เชี่ยวชาญด้านพัฒนาเว็บแอปพลิเคชัน',
      image: '/images/arm.png',
      description: 'มีประสบการณ์ในวงการพัฒนาเว็บมากกว่า 10 ปี และมีผลงานสอนกว่า 3,000 คน',
      students: '3,200+',
      rating: '4.8/5.0'
    },
    {
      id: 3,
      name: 'ดร.วรรณภา ฉัตรทอง',
      title: 'ผู้เชี่ยวชาญด้านฐานข้อมูล',
      image: '/images/Gemini_Generated_Image_di771rdi771rdi77.png',
      description: 'เชี่ยวชาญด้านระบบฐานข้อมูลและการวิเคราะห์ข้อมูล ประสบการณ์การสอนกว่า 8 ปี',
      students: '2,800+',
      rating: '4.7/5.0'
    },
    {
      id: 4,
      name: 'อ.ณัฐธภา ยงศิลป์วิริยะกุล',
      title: 'ผู้เชี่ยวชาญด้าน Mobile Development',
      image: '/images/instructor4.jpg',
      description: 'มีประสบการณ์ในการพัฒนาแอปพลิเคชันมือถือมากกว่า 7 ปี และเป็นที่ปรึกษาให้กับสตาร์ทอัพหลายแห่ง',
      students: '2,500+',
      rating: '4.9/5.0'
    },
    {
      id: 5,
      name: 'ดร.เพ็ญรัศมิ์ เฮงเลิศรัตน',
      title: 'ผู้เชี่ยวชาญด้าน AI และ Machine Learning',
      image: '/images/02.png',
      description: 'มีประสบการณ์ในการพัฒนาและวิจัยด้านปัญญาประดิษฐ์มากกว่า 12 ปี และเป็นผู้ทรงคุณวุฒิในวงการ',
      students: '4,100+',
      rating: '4.8/5.0'
    },
    {
      id: 6,
      name: 'อาจารย์ Attawit Changkamanon',
      title: 'ผู้เชี่ยวชาญด้านทุกวิชา',
      image: '/images/unnamed (1).png',
      description: 'ผู้เชี่ยวชาญด้านการสอนที่มีประสบการณ์หลากหลายด้าน พร้อมที่จะถ่ายทอดความรู้ทุกวิชาให้กับนักเรียนอย่างเป็นระบบและเข้าใจง่าย',
      students: '1,5000+',
      rating: '5.0/5.0'
    }
  ];

  const testimonials = [
    {
      name: 'นพดล พิทยาภรณ์',
      role: 'นักศึกษา ปี 2',
      content: '&quot;คอร์สสอนเข้าใจง่ายมาก อาจารย์อธิบายละเอียดและมีแบบฝึกหัดให้ลองทำจริง ทำให้ผมสามารถสร้างเว็บไซต์ของตัวเองได้ภายใน 2 เดือน&quot;',
      rating: 5
    },
    {
      name: 'ภัทรวดี สุขสมบูรณ์',
      role: 'พนักงานออฟฟิศ',
      content: '&quot;ก่อนเรียนไม่เคยเขียนโปรแกรมเลย แต่หลังจากเรียนคอร์สพื้นฐานเสร็จ ฉันสามารถทำงาน Freelance หาเงินเสริมได้แล้ว ขอบคุณ SOJU Academy มาก&quot;',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 text-gray-900">
      {/* Header */}
      <header className="border-b border-indigo-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎓</span>
            </div>
            <h1 className="text-2xl font-bold text-indigo-900">SOJU Coding Academy</h1>
          </div>
          
          <Link 
            href="/chat" 
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 text-green-500" />
            <span className='text-green-500' >กลับสู่แชท</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            เรียนเขียนโปรแกรมกับ <span className="text-indigo-600">SOJU Coding Academy</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-16">
            เรียนรู้ทักษะการเขียนโปรแกรมจากศูนย์ พร้อมโปรเจกต์จริงที่จะทำให้คุณกลายเป็นนักพัฒนาที่พร้อมสำหรับการทำงาน
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`${benefit.color} ${benefit.hoverColor} rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer border border-white/50`}
                onClick={benefit.link ? () => window.location.href = benefit.link : undefined}
              >
                <div className={`mb-6 flex justify-center ${benefit.textColor}`}>
                  {benefit.icon}
                </div>
                <h3 className={`font-bold text-xl mb-4 ${benefit.textColor}`}>{benefit.title}</h3>
                <p className={`text-lg ${benefit.textColor}`}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">ทีมผู้สอนของเรา</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <Image 
                      src={instructor.image} 
                      alt={instructor.name} 
                      width={150} 
                      height={150} 
                      className="rounded-xl shadow-md"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{instructor.title}</p>
                  <p className="text-gray-700 text-sm mb-4">{instructor.description}</p>
                  <div className="flex flex-wrap justify-center gap-4 w-full">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-indigo-600" />
                      <span className="text-gray-700 text-sm">{instructor.students} คน</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-gray-700 text-sm">{instructor.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">คอร์สของเรา</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`${pkg.color} rounded-2xl border-2 p-8 relative shadow-lg transition-all hover:scale-105 duration-300 ${pkg.border} cursor-pointer`}
                onClick={() => window.location.href = '/register'}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                    คอร์สแนะนำ
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${pkg.text}`}>{pkg.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-indigo-700">฿{pkg.price}</span>
                    <span className="text-gray-500 line-through">฿{pkg.originalPrice}</span>
                  </div>
                  <div className={`flex items-center gap-4 text-sm ${pkg.text}`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {pkg.sessions}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className={pkg.text}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 rounded-lg font-medium text-white transition ${pkg.button}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = '/register';
                  }}
                >
                  ลงทะเบียนตอนนี้
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">เสียงจากผู้เรียน</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-indigo-100 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&quot;{testimonial.content}&quot;</p>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-indigo-100 py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl text-white">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-indigo-900">SOJU Coding Academy</h3>
            </div>
            
            <div className="flex gap-6">
              <Link href="/chat" className="text-indigo-700 texe-green-500 hover:text-indigo-900 transition font-medium">
                กลับสู่หน้าแชท
              </Link>
              <a href="#" className="text-indigo-700 hover:text-indigo-900 transition font-medium">
                คำถามที่พบบ่อย
              </a>
              <a href="#" className="text-indigo-700 hover:text-indigo-900 transition font-medium">
                ติดต่อเรา
              </a>
            </div>
          </div>
          
          <div className="border-t border-indigo-100 mt-8 pt-8 text-center text-gray-600">
            <p>© 2025 SOJU Coding Academy. สงวนลิขสิทธิ์.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}