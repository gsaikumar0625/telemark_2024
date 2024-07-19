
import React from 'react'
import Heading from '../Heading';
const Team = () => {
  const links = [
    { text: 'Home', url: '/' },
    { text: 'Our Team', url: '/team' }
  ];
  return (
    <>
      <Heading heading={'Our Team'} links={links} />
      {/* <div className='w-full bg-white flex justify-center'>
        <div className="mx-auto flex flex-col justify-end">
          <div class="mx-auto grid max-w-4xl grid-cols-12 gap-4 bg-zinc-50 p-1">
            <div class="font-semibold leading-[1.9rem] text-black col-span-12 g-white py-5 
        text-start mt-2">
              <div>
                <h1 class="text-primaryColor mt-12 mb-8 font-extrabold"
                  style={{ fontSize: 40 }}>Team</h1>
              </div>


              <section id="team" class="team section-bg">
                <div class="div px-6" data-aos="fade-up"> 
                  <div class="grid grid-cols-2 gap-2"> 

                    <div data-aos="zoom-in" data-aos-delay="100">
                      <div class="member align-items-start">
                        <div class="pic">
                          <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" class="img-fluid" alt="" /></div>
                        <div class="member-info">
                          <h4>Walter White</h4>
                          <span>Chief Executive Officer</span>
                          <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                          <div class="social">
                            <a href=""><i class="fab fa-facebook-f"></i></a>
                            <a href=""><i class="fab fa-twitter"></i></a>
                            <a href=""><i class="fab fa-instagram"></i></a>
                            <a href=""> <i class="fab fa-linkedin-in"></i> </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="200">
                      <div class="member d-flex align-items-start">
                        <div class="pic">
                          <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" class="img-fluid" alt=""/></div>
                        <div class="member-info">
                          <h4>Sarah Jhonson</h4>
                          <span>Product Manager</span>
                          <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                          <div class="social">
                            <a href=""><i class="fab fa-facebook-f"></i></a>
                            <a href=""><i class="fab fa-twitter"></i></a>
                            <a href=""><i class="fab fa-instagram"></i></a>
                            <a href=""> <i class="fab fa-linkedin-in"></i> </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4" data-aos="zoom-in" data-aos-delay="300">
                      <div class="member d-flex align-items-start">
                        <div class="pic">
                          <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" class="img-fluid" alt="" /></div>
                        <div class="member-info">
                          <h4>William Anderson</h4>
                          <span>CTO</span>
                          <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                          <div class="social">
                            <a href=""><i class="fab fa-facebook-f"></i></a>
                            <a href=""><i class="fab fa-twitter"></i></a>
                            <a href=""><i class="fab fa-instagram"></i></a>
                            <a href=""> <i class="fab fa-linkedin-in"></i> </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4" data-aos="zoom-in" data-aos-delay="400">
                      <div class="member d-flex align-items-start">
                        <div class="pic">
                          <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" class="img-fluid" alt="" /></div>
                        <div class="member-info">
                          <h4>Amanda Jepson</h4>
                          <span>Accountant</span>
                          <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                          <div class="social">
                            <a href=""><i class="fab fa-facebook-f"></i></a>
                            <a href=""><i class="fab fa-twitter"></i></a>
                            <a href=""><i class="fab fa-instagram"></i></a>
                            <a href=""> <i class="fab fa-linkedin-in"></i> </a>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div> 
                </div>
              </section> 
              <div>
              </div>
            </div>
          </div>
        </div>

      </div> */}

  <section class="max-w-screen-xl mx-auto py-20 px-8 lg:px-10">
  <h2 class="text-4xl xl:text-5xl capitalize text-center text-indigo-900 font-bold">our team</h2>
  <hr class="mx-auto w-12 h-1 outline-0 border-0 bg-green-300 block mt-4 mb-6" />
  <p class="text-center text-xl text-gray-800">Our team consists only of the best talents</p>

  <div class="flex flex-col gap-6 mt-16">
    <div class="flex flex-col md:flex-row gap-6">
      <div class="w-full lg:w-1/4 rounded-3xl overflow-hidden">
        <img src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hanna Lubin" class="w-full h-full object-cover aspect-video lg:aspect-square" />
      </div>
      <div class="w-full lg:w-9/12 bg-red-100 rounded-3xl flex flex-col justify-center p-8 lg:p-14">
        <h3 class="text-2xl capitalize text-indigo-900 font-semibold">hanna lubin</h3>
        <span class="inline-block capitalize text-xl text-indigo-900 font-light mt-1.5 mb-5">doctor</span>
        <p class="text-indigo-900 opacity-75 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam saepe sint expedita suscipit nemo nihil cupiditate culpa temporibus, facere nisi.</p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row-reverse gap-6">
      <div class="w-full lg:w-1/4 rounded-3xl overflow-hidden">
        <img src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Erin Calzoni" class="w-full h-full object-cover aspect-video lg:aspect-square" />
      </div>
      <div class="w-full lg:w-9/12 bg-blue-100 rounded-3xl flex flex-col justify-center p-8 lg:p-14">
        <h3 class="text-2xl capitalize text-indigo-900 font-semibold">Erin Calzoni</h3>
        <span class="inline-block capitalize text-xl text-indigo-900 font-light mt-1.5 mb-5">nurse</span>
        <p class="text-indigo-900 opacity-75 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam saepe sint expedita suscipit nemo nihil cupiditate culpa temporibus, facere nisi.</p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row gap-6">
      <div class="w-full lg:w-1/4 rounded-3xl overflow-hidden">
        <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="w-full h-full object-cover aspect-video lg:aspect-square" />
      </div>
      <div class="w-full lg:w-9/12 bg-yellow-100 rounded-3xl flex flex-col justify-center p-8 lg:p-14">
        <h3 class="text-2xl capitalize text-indigo-900 font-semibold">jenna smith</h3>
        <span class="inline-block capitalize text-xl text-indigo-900 font-light mt-1.5 mb-5">
          pediatrician</span>
        <p class="text-indigo-900 opacity-75 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam saepe sint expedita suscipit nemo nihil cupiditate culpa temporibus, facere nisi.</p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row-reverse gap-6">
      <div class="w-full lg:w-1/4 rounded-3xl overflow-hidden">
        <img src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="w-full h-full object-cover aspect-video lg:aspect-square" />
      </div>
      <div class="w-full lg:w-9/12 bg-green-100 rounded-3xl flex flex-col justify-center p-8 lg:p-14">
        <h3 class="text-2xl capitalize text-indigo-900 font-semibold">christina meyer</h3>
        <span class="inline-block capitalize text-xl text-indigo-900 font-light mt-1.5 mb-5">psychologist</span>
        <p class="text-indigo-900 opacity-75 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam saepe sint expedita suscipit nemo nihil cupiditate culpa temporibus, facere nisi.</p>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Team