
import './App.css';
import foxhub2 from './assets/foxhub3.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useRef } from 'react';
function App() {
  const initialValues = {
    name: '',
    email: ''
  }

  const onSubmit = (values, onsubmitprops) => {
    console.log(values);
    onsubmitprops.resetForm();
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("This field is requried"),
    email: Yup.string().email("Invalid email format").required("This field is requiired")
  })
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })
  const ele = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 20 ? ele.current.classList.add('onScroll') :
        ele.current.classList.remove('onScroll');
    }
    window.addEventListener('scroll', onScroll);

    let i = document.querySelectorAll('.navbar-nav .nav-item');
    let toggler = document.querySelector('.navbar-collapse');
    i.forEach(item => {
      item.addEventListener('click', () => {
        toggler.classList.remove('show');
      })
    })

    return ()=>window.removeEventListener('scroll', onScroll);
  })
  return (
    <div className='mb-5'>
      <nav ref={ele} className='navbar sticky-top navbar-expand-lg'>
        <div className='container'>
          <img className='navbar-brand' src={foxhub2} alt='brand-logo' />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sandwich">
            <span className="uil uil-bars"></span>
          </button>
          <div className='collapse navbar-collapse' id='sandwich'>
            <ul className='navbar-nav ms-auto text-center'>
              <li className='nav-item'><a className='nav-link' href='#hero'>Home</a></li>
              <li className='nav-item'><a className='nav-link' href='#about'>About</a></li>
              <li className='nav-item'><a className='nav-link' href='#projects'>Projects</a></li>
              <li className='nav-item'><a className='nav-link' href='#reviews'>Reviews</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <section id='hero'>
        <div className='container mt-5'>
          <div className='row align-items-center'>
            <div className='col-md-6 col-12 mb-md-0 mb-4'>
              <h1>
                Beyond Imagination
              </h1>
              <h5>
                Scale your business with accessible and affordable designs.
                Designs in align with the technology and trend.we are a graphic design
                studio with you in mind. we are the THE FOXHUB.
              </h5>
              <button type='button' className='btn rounded-pill mt-2'>website <i className="uil uil-external-link-alt ms-2"></i></button>
            </div>
            <div className='col-md-6 col-12'>
              <img className='img-fluid' src={require('./assets/bannerimg.jpg')} alt='banner' />
            </div>
          </div>
        </div>
      </section>
      <section id='about'>
        <div className='container mt-5 mb-md-5 mb-3'>
          <div className='row align-items-center'>
            <div className='col-md-6 col-12 pe-md-4 pe-inital mb-md-0 mb-4'>
              <h2>Subscribe to our Newsletter</h2>
              <form onSubmit={formik.handleSubmit}>
                <div className='inputs'>
                  <label htmlFor='name' className='form-label'>Name</label>
                  <input className='form-control' type='text' id='name' name='name' {...formik.getFieldProps('name')} />
                  {formik.errors.name && formik.touched.name && <div className='error'>{formik.errors.name}</div>}
                </div>
                <div className='inputs'>
                  <label htmlFor='email' className='form-label'>Email</label>
                  <input className='form-control' type='email' id='email' name='email' {...formik.getFieldProps('email')} />
                  {formik.errors.email && formik.touched.email && <div className='error'>{formik.errors.email}</div>}
                </div>
                <button type='submit' className='btn rounded-pill mt-2'>Submit</button>
              </form>
            </div>
            <div className='col-md-6 col-12 mb-md-0'>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, consequatur recusandae non doloribus perspiciatis quibusdam assumenda temporibus esse praesentium repellendus quae aspernatur earum labore. Saepe explicabo nemo architecto nisi sed error quam hic, voluptatibus dolorem?</p>
              <ul className='mt-3 list-unstyled' id='features'>
                <li><i className="uil uil-check-circle me-2 fs-5 align-middle"></i><span>Lorem ipsum dolor sit</span></li>
                <li><i className="uil uil-check-circle me-2 fs-5 align-middle"></i><span>Voluptatum ipsa eos sit</span></li>
                <li><i className="uil uil-check-circle me-2 fs-5 align-middle"></i><span>Consectetur adipisicing elit</span></li>
                <li><i className="uil uil-check-circle me-2 fs-5 align-middle"></i><span>Veniam molestias sint</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id='projects'>
        <div className='container mb-4'>
          <h2 className='mb-4'>Language made visual</h2>
          <div className='row justify-content-between gap-md-0 gap-2'>
            <div className='col-md-4 col-10'>
              <figure>
                <img src={require('./assets/img1.jpg')} className='img-fluid rounded-3' alt='products' />
                <figcaption>Packaging Design</figcaption>
              </figure>
            </div>
            <div className='col-md-4 col-10'>
              <figure>
                <img src={require('./assets/img2.jpg')} className='img-fluid rounded-3' alt='products' />
                <figcaption>Logo Design</figcaption>
              </figure>
            </div>
            <div className='col-md-4 col-10'>
              <figure>
                <img src={require('./assets/img3.jpg')} className='img-fluid rounded-3' alt='products' />
                <figcaption>Business Card Design</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section id='reviews'>
        <div className='container'>
          <h2 className='mb-4'>Our hardwork speaks itself</h2>
          <div className='row justify-content-between gap-md-0 gap-4' id='testimonial'>
            <div className='col-md-5 col-10 p-0'>
              <div className='row align-items-center justify-content-between'>
                <div className='col-2'>
                  <img className='img-fluid rounded-circle' src={require('./assets/test_3.jfif')} alt='reviews' />
                </div>
                <div className='col-10'>
                  <p className='mb-0'>Emma Brown</p>
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet sit blanditiis iure corporis corrupti quae animi recusandae ab porro voluptas. Ipsum, eius in!</span>
                </div>
              </div>
            </div>
            <div className='col-md-5 col-10 p-0'>
              <div className='row align-items-center justify-content-between'>
                <div className='col-2'>
                  <img className='img-fluid rounded-circle' src={require('./assets/test_2.jfif')} alt='reviews' />
                </div>
                <div className='col-10'>
                  <p className='mb-0'>Monty Smith</p>
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet sit blanditiis iure corporis corrupti quae animi recusandae ab porro voluptas. Ipsum, eius in!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
