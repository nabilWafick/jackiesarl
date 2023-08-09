function Login() {
  return (
    <div className=" h-screen w-screen flex items-center justify-center content-center">
      <div className="w-[400px] shadow-lg flex p-7">
        <form className=" w-full " action="#" method="POST">
          <span className="text-bold text-[30px] mb-10 flex justify-center text-center text-black">
            Creer un compte
          </span>
          <div className="my-1 w-full">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              required
              className="w-full text-black text-md rounded-sm bg-transparent py-1.5 px-2 border border-orange-400 focus:rounded-sm  focus:outline-none focus:border-2  cursor-orange-400 "
            />
          </div>

          <div className=" flex flex-row my-1">
            <select className=" bg-transparent focus:border-2 focus:outline-none py-1.5 border border-orange-400">
              <option value="+229">+229</option>
              <option value="+33">+33</option>
              <option value="+1">+1</option>
            </select>
            <input
              id="phone"
              name="phone"
              type="phone"
              autoComplete="phone"
              placeholder="Numero de telephone"
              required
              className="w-full  text-black text-md rounded-sm bg-transparent py-1.5 px-2 border border-orange-400 focus:rounded-sm  focus:outline-none focus:border-2  cursor-orange-400 "
            />
          </div>
          <div className=" my-1 flex flex-col">
            <div className="">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                placeholder="Mot de passe"
                required
                className="w-full text-black text-md  rounded-sm bg-transparent py-1.5 px-2 border border-orange-400 focus:rounded-sm  focus:outline-none focus:border-2  cursor-orange-400 "
              />
            </div>
            <div className="text-md flex mt-2 justify-end">
              {/* <a
                href="#"
                className="font-normal text-orange-500 hover:text-indigo-400"
              >
                Mot de passe oublie
              </a> */}
            </div>
          </div>

          <button
            type="submit"
            className="flex mt-3 w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-md font-semibold text-white shadow-sm hover:shadow-lg  hover:border-none "
          >
            Inscription
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
