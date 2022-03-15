<script>
  let people = [
    {name: 'computer', image: '/Illustrations.png', company: 'techminate', id: 1 },
    {name: 'computerd', image: '/Illustrations.png', company: 'techminatxe', id: 2 },
    {name: 'computer', image: '/Illustrations.png', company: 'techminategg', id: 3 },
    {name: 'computer', image: '/Illustrations.png', company: 'techminategg', id: 4 },
  ]
 </script>
 <!----card component-->
 <main>
     <h1 class="text-center text-3xl py-6">Our Expertise</h1>
     <div class="grid grid-cols-1 sm:grid-cols-4 px-5 gap-4 items-center">
        <div class="card card-side  w-86 bg-base-100 shadow-xl">
             <figure class="px-5 pt-10">
                 <img src="https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg" alt="Shoes" class="rounded-xl" />
             </figure>
             <div class="card-body mt-10 items-center text-center">
                 <h2 class="card-title">{people[0].name}</h2>
                 <p>{people[0].company}</p>
            </div>
        </div>
         <div class="card card-side w-86 bg-base-100 shadow-xl">
             <figure class="px-5 pt-10">
                 <img src="https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg" alt="Shoes" class="rounded-xl" />
             </figure>
             <div class="card-body mt-10 items-center text-center">
                 <h2 class="card-title">{people[0].name}</h2>
                 <p>{people[0].company}</p>
             </div>
        </div>
        <div class="card card-side w-86 bg-base-100 shadow-xl">
             <figure class="px-5 pt-10">
                 <img src="https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg" alt="Shoes" class="rounded-xl" />
             </figure>
             <div class="card-body mt-10 items-center text-center">
                 <h2 class="card-title">{people[0].name}</h2>
                 <p>{people[0].company}</p>
             
             </div>
        </div>
        <div class="card card-side w-86 bg-base-100 shadow-xl">
         <figure class="px-5 pt-10">
             <img src="https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg" alt="Shoes" class="rounded-xl" />
         </figure>
         <div class="card-body mt-10 items-center text-center">
             <h2 class="card-title">{people[0].name}</h2>
             <p>{people[0].company}</p>
         
         </div>
    </div>
     </div>

     


 </main>
 <!----End card component-->