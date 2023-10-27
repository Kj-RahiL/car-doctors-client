import { Link } from 'react-router-dom';
import loginImg from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)
    const handleSignUp = (e) =>{
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const password = from.password.value
        const users = {email, password, name}
        console.log(users)

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log('created user', user)
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen mb-20">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="text-center lg:text-left mr-16 w-1/2">
                   <img src={loginImg} alt="" />
                </div>
                <div className=" rounded flex-shrink-0 w-full max-w-sm shadow-sm bg-base-100 border border-[#D0D0D0]">
                    <h2 className='text-4xl font-semibold text-center mt-8'>Sign Up</h2>
                    <form onSubmit={handleSignUp} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-white hover:text-black bg-[#FF3811]  normal-case">LogIn</button>
                        </div>
                    </form>
                    <div className='py-5'>
                        <p className='text-center'>or Sign In with</p>
                    </div>
                    <h3 className='text-center mb-5'>Already have an account!! Please <Link to='/login' className='text-[#FF3811]'>Sign Up</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default SignUp ;