import React from 'react'

function ClientsForm() {
    return (
        <div>
            <section className="inner-page">
                <div className="container">
                    <div className="container">


                        <div className="row">
                            <div className="col-md-6 offset-3">
                                <form>

                                    <div className="form-outline mb-4 mt-4">
                                        <input type="text" id="form2Example1" className="form-control" />
                                        <label className="form-label" >Full name</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="email" id="form2Example1" className="form-control" />
                                        <label className="form-label" >Email address</label>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="text" id="form2Example2" className="form-control" />
                                        <label className="form-label" >Location</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="number" id="form2Example2" className="form-control" />
                                        <label className="form-label" >Developer ID</label>
                                    </div>
                                   


                                    <div className="row mb-4">
                                        <div className="col d-flex justify-content-center">

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                                <label className="form-check-label" for="form2Example31"> Remember me </label>
                                            </div>
                                        </div>


                                    </div>


                                    <button type="button" className="btn btn-primary btn-block mb-4">Register</button>


                                    <div className="text-center">
                                        <p>Already a a member? <a href="login.html">Login</a></p>
                                        <p>or sign up with:</p>
                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-facebook-f"></i>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-google"></i>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-twitter"></i>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-github"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>




                    </div>
                </div>
            </section>












        </div>
    )
}

export default ClientsForm
