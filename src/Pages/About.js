import React, { useState } from 'react';
import Slideshow from '../Components/Slidershow';
import  Carousel  from '../Components/Carousel';

const About = () => {
 


  return (
    <div className="p-6 font-sans">
      
      <h1 className="text-3xl text-orange-600 font-bold mb-4">Lakshaka Insta Management Private Limited</h1>
      <div className="space-y-5">
      <p>
      Lakshaka Insta Management Private Limited is a Private incorporated on 16 August 2022. It is classified as Non-govt company and is registered at Registrar of Companies, Coimbatore. Its authorized share capital is Rs. 1,000,000 and its paid up capital is Rs. 300,000. It is inolved in Business activities.
      </p>
      <p>Directors of Lakshaka Insta Management Private Limited are Masthamma Nataraj Padmanabhan and Padmanabhan Sridevi.</p>
      <p>Lakshaka Insta Management Private Limited's Corporate Identification Number is (CIN) U74999TZ2022PTC039689 and its registration number is 39689.</p>
      <p>Current status of Lakshaka Insta Management Private Limited is - Active.</p>
      </div>
      <div>
  <h1 className="text-2xl font-bold mb-4 pt-[20px] text-orange-600">Company Info</h1>
  <p className="mb-2"><strong>Incorporation Date:</strong> 16 August 2022</p>
  <p className="mb-2"><strong>Company Type:</strong> Private, Non-govt company</p>
  <p className="mb-2"><strong>Registrar of Companies:</strong> Coimbatore</p>
  <p className="mb-2"><strong>Authorized Share Capital:</strong> Rs. 1,000,000</p>
  <p className="mb-2"><strong>Paid Up Capital:</strong> Rs. 300,000</p>
  <p className="mb-2"><strong>Business Activities:</strong> Business activities n.e.c.</p>
  <p className="mb-2"><strong>Annual General Meeting (AGM):</strong> N/A</p>
  <p className="mb-2"><strong>Balance Sheet Filed:</strong> N/A</p>
  <p className="mb-2"><strong>Corporate Identification Number (CIN):</strong> U74999TZ2022PTC039689</p>
  <p className="mb-2"><strong>Registration Number:</strong> 39689</p>
  <p className="mb-2"><strong>Current Status:</strong> Active</p>
</div>

<div>
<h1 className="text-2xl font-bold mb-4 pt-[20px] text-orange-600">Directors</h1>
  <ul className="list-disc list-inside">
    <li>Masthamma Nataraj Padmanabhan</li>
    <li>Padmanabhan Sridevi</li>
  </ul>
</div>

<div class="overflow-x-auto pb-[30px]">
<h1 className="text-2xl font-bold mb-4 pt-[20px] text-orange-600">Directors Details</h1>
  <table class="table-auto">
    <thead>
      <tr>
        <th class="px-4 py-2">DIN</th>
        <th class="px-4 py-2">Director Name</th>
        <th class="px-4 py-2">Designation</th>
        <th class="px-4 py-2">Appointment Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="px-4 py-2">01121272</td>
        <td class="px-4 py-2">MASTHAMMA NATARAJ PADMANABHAN</td>
        <td class="px-4 py-2">Director</td>
        <td class="px-4 py-2">16 August 2022</td>
      </tr>
      <tr>
        <td class="px-4 py-2">05308735</td>
        <td class="px-4 py-2">PADMANABHAN SRIDEVI</td>
        <td class="px-4 py-2">Director</td>
        <td class="px-4 py-2">16 August 2022</td>
      </tr>
    </tbody>
  </table>
</div>

      <h1 className="text-3xl text-orange-600 font-bold mb-4 pt-[12px]">About Company</h1>
      <div className="space-y-5">
      <p>
        Lakshaka Insta Management Private Limited is based in Coimbatore, Tamilnadu. Our prime
        goal is to mark ourselves as a fast-growing, well-established, and renowned company. Our main
        product includes all kinds of Medical Dress, Nurse Uniforms, Medical Equipment, etc.
      </p>
      <p>
        The family is traditionally in the field of Textiles and in Garments Manufacturing for more than 8
        decades. The Patriarch of the family is the owner of a garment business named
        <h3 className="inline font-bold text-black"> Veeramaasthi Tex Fabs</h3> in Coimbatore and Bangalore and their son is the owner of a garment
        business named <h3 className="inline font-bold text-black">Lakshaka Tex LLP</h3> in Coimbatore and their granddaughter is the
        owner of a garment business named <h3 className="inline font-bold text-black">PH Project</h3> in Coimbatore.
      </p>
      <p>
        And now the Lakshaka Insta Management Pvt Ltd with the vision of skill development and
        entrepreneurship for the youths has partnered with the Tamilnadu Government on skilling. We have
        also conducted assessments in Skill Development for 5000 candidates across Tamilnadu for the
        Government. We have professionals in our company who can take care of the Admin and
        Management and also technical experts to conduct any program.
      </p>
    </div>
    <h1 className="text-2xl text-orange-600 font-bold mb-4 pt-[20px]">Object</h1>
    <div className="space-y-5">
      <p>
            To carry on the business providing Management Consultancy Services in the field of skill
      development programs, Training Programs, Government Funded Programs, Fee Based
      Program, CSR Programs and Marketing and Services Whether in India or Abroad.
      </p>
      <p>
              To commence and carry on all the activities related to the promotion / propagation of vocational
        technical and non-technical education among unemployed and underemployed youth including
        transfer of skills and Knowledge through crash / refresher / short term courses, class based
        conferences, orientation training / capacity building programs. And also supply all types of
        medical equipment and medical dress etc.</p>
    </div>
    <h1 className="text-2xl font-bold mb-4 text-orange-600 pt-[20px]">Strength</h1>
    <ul className="list-disc list-inside space-y-2">
            <li>The key financial indicators as per projections reflects financial strength.
            </li>
            <li>The promoter directors have the professional and technical qualification and work experience to ensure quality of the product demanding a king of skill.</li>
            <li>The Directors have the wealth of experience in the line of business and have proven experience in business expansion of Domestic and export units.</li>
    </ul>
    <h1 className="text-2xl font-bold mb-4 text-orange-600 pt-[20px]">Infrastructure</h1>
    <p>Lakshaka Insta Management Pvt Ltd has 2900 sq.feet of building space in the heart of the city
    and we can commit training 200-300 candidates ever quarter. We have the capacity of further
    increase the numbers. We have the office in Dr. Nanjappa Road, Coimbatore, Tamilnadu.</p>

    <h1 className="text-2xl font-bold mb-4 text-orange-600 pt-[20px] pb-[20px]">Gallery</h1>
    <Carousel/>

    <h1 className="text-2xl font-bold mb-4 text-orange-600 pt-[20px] pb-[20px]">Contact Details</h1>
    <div>
      <h1><strong>Mail Id:</strong></h1>
      <p>lakshakainstaofficial@gmail.com <br/> padh122@gmail.com</p>
    </div>
    <div className='mt-[20px]'>
      <h1><strong>Phone Number</strong></h1>
      <p>78922 82496<br/>99403 06555</p>
    </div>
    
    



    </div>
  );
};

export default About;
