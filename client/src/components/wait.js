<div className="flex flex-col gap-4 h-screen items-center justify-center">
            <label className=" bg-[#116666] rounded-lg">
            <h2 className="p-2 font-bold  text-[#e8f9f9]  text-lg"> Username : </h2>  

              <input
                type="text"
                onChange={(e) => setData({ ...data, username: e.target.value })}
                className="w-full px-5 py-3  
                bg-[#062828]
                border-2
                border-[#d2f4f4]
                rounded-md font-bold 
                focus:border-[#116666]
                rounded-xl
                "
              />
            </label>
            <label className=" bg-[#116666] rounded-lg">
              <h2 className="p-2 font-bold text-lg"> Email : </h2>
              <input
                type="email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="w-full px-5 py-3  
              bg-[#062828]
              border-2
              border-[#d2f4f4]
              rounded-md font-bold 
              focus:border-[#116666]
              rounded-xl
              "
              />
            </label>
            <label className=" bg-[#116666] rounded-lg">
              <h2 className="p-2 font-bold text-lg">Password : </h2>
              <input
                type="text"
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="w-full px-5 py-3  
              bg-[#062828]
              border-2
              border-[#d2f4f4]
              rounded-md font-bold 
              focus:border-[#116666]
              rounded-xl
            
              "
              />
            </label>

          
           
            <button
              onClick={handleRegister}
              className="p-3 px-[5rem] font-bold
              px-5 py-3  
              bg-[#062828]
              border-2
              border-[#d2f4f4]
              rounded-md font-bold 
              focus:border-[#116666]
              rounded-2xl
              motion-safe:hover:-translate-x-0.5 motion-safe:transition bg-[#116666] hover:border-[#EE1442] px-5 py-2 text-[1rem] border-2 
            "
            >
              Register
            </button>
          </div>
        
 