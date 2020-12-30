import React from 'react';
import { Link } from 'react-router-dom';

import Styled from 'styled-components';

const Register = () => {
    return(
        <>
        <RegisterStyle className="row">
            <div className="col-10 col-md-7 col-lg-6">
            <Link to="/">
                <img className="ml-5 my-4" src="./images/logo_2.png" alt="perxels logo" />
            </Link>
                <div style={{ marginLeft: '4rem', marginRight: '2rem' }}>
                    <RegisterHeading>Join</RegisterHeading>
                    <form action="#">
                        <FormGroupStyle className="form-row">
                            <div className="form-group col-md-6">
                                <LabelStyle htmlFor="inputEmail4">First Name</LabelStyle>
                                <InputStyle type="email" className="form-control" id="inputEmail4" placeholder="First Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <LabelStyle htmlFor="inputPassword4">Last Name</LabelStyle>
                                <InputStyle type="password" className="form-control" id="inputPassword4" placeholder="Last Name" />
                            </div>
                        </FormGroupStyle>

                        <FormGroupStyle className="option-group">
                            <h5 className="mb-3">Gender</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                <LabelStyle2 class="form-check-LabelStyle" for="exampleRadios1">
                                    Male
                                </LabelStyle2>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <LabelStyle2 class="form-check-LabelStyle" for="exampleRadios2">
                                    Female
                                </LabelStyle2>
                            </div>
                        </FormGroupStyle>
                        <FormGroupStyle className="form-group">
                            <LabelStyle htmlFor="inputPassword4">Email</LabelStyle>
                            <InputStyle type="email" className="form-control" id="inputPassword4" placeholder="User@example.com" />
                        </FormGroupStyle>
                        <FormGroupStyle className="form-group">
                            <LabelStyle htmlFor="inputPassword4">City</LabelStyle>
                            <InputStyle type="email" className="form-control" id="inputPassword4" placeholder="Lagos" />
                        </FormGroupStyle>
                        <FormGroupStyle className="option-group">
                            <h5 className="mb-3">Social Media Handle</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" />
                                <LabelStyle2 class="form-check-label" for="exampleRadios1">
                                    Twitter
                                </LabelStyle2>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" />
                                <LabelStyle2 class="form-check-label" for="exampleRadios2">
                                    Instagram
                                </LabelStyle2>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" />
                                <LabelStyle2 class="form-check-label" for="exampleRadios2">
                                    LinkedIn
                                </LabelStyle2>
                            </div>
                            <div className="form-group">
                                <InputStyle type="email" className="form-control col-12 col-md-6 mt-3" id="inputPassword4" placeholder="Username" />
                            </div>
                        </FormGroupStyle>

                        <FormGroupStyle className="option-group">
                            <h5 className="mb-3">What area of UI/UX do you specialize in</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" />
                                <LabelStyle2 class="form-check-label" for="exampleRadios1">
                                    User Interface
                                </LabelStyle2>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" />
                                <LabelStyle2 class="form-check-label" for="exampleRadios2">
                                    User Experience
                                </LabelStyle2>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" />
                                <LabelStyle2 class="form-check-label" for="exampleRadios2">
                                    Both
                                </LabelStyle2>
                            </div>
                        </FormGroupStyle>

                        <FormGroupStyle className="option-group">
                            <h5 className="mb-3">Will you be readily available if a project comes up</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" />
                                <LabelStyle2 class="form-check-label" for="exampleRadios1">
                                    Yes
                                </LabelStyle2>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" />
                                <LabelStyle2 class="form-check-label" for="exampleRadios2">
                                    No
                                </LabelStyle2>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" />
                                <LabelStyle2 class="form-check-label" for="exampleRadios2">
                                    Not Certain
                                </LabelStyle2>
                            </div>
                        </FormGroupStyle>

                        <FormGroupStyle className="form-group">
                            <LabelStyle htmlFor="inputPassword4">Why do you want to be part of this fellowship? <span>*</span></LabelStyle>
                            <InputStyle type="email" className="form-control" id="inputPassword4" placeholder="Answer In 150 Words" />
                        </FormGroupStyle>

                        <FormGroupStyle className="form-group">
                            <LabelStyle htmlFor="inputPassword4">Link to Portfolio <span>*</span></LabelStyle>
                            <InputStyle type="email" className="form-control col-12 col-md-6" id="inputPassword4" placeholder="Link" />
                        </FormGroupStyle>

                        <SubmitButton type="submit" className="btn btn-primary">JOIN NOW</SubmitButton>
                    </form>
                </div>
            </div>
            <SecondColumn className="col-2 col-md-5 col-lg-6" style={{ backgroundColor: "#1DB6BC" }}>
                <img src="./images/abstract.png" alt=""/>
            </SecondColumn>
        </RegisterStyle>
    </>
    )
}

export default Register;

const RegisterStyle  = Styled.div`
    min-height: 100vh; 
`;

const SecondColumn = Styled.div`
    position: relative;

    img {
        position: fixed;
        bottom: 0;
        right: 0;
        height: 460px;
        width: auto;

        @media (max-width: 780px) {
            right: -30%;
        }

        @media (max-width: 600px) {
            right: -40%;
        }

        @media (max-width: 460px) {
            right: -70%;
        }
    }
`;

const RegisterHeading = Styled.h1`
    font-size: 4rem;
    font-family: ProximaBold, "Helvetica", "Arial", sans-serif;
    color: #000000;
    margin-top: 28px;
    margin-bottom: 48px;
`;

const LabelStyle = Styled.label`
    font-family: ProximaRegular, "Helvetica", "Arial", sans-serif;
    color: #000000;
    font-size: 1.3rem;
`;

const LabelStyle2 = Styled.label`
    font-family: ProximaRegular, "Helvetica", "Arial", sans-serif;
    color: #000000;
    font-size: 1.1rem;
`;

const InputStyle = Styled.input`
    border: 1px solid #1DB6BC;
`;

const FormGroupStyle = Styled.div`
    margin-bottom: 40px;

    span {
        color: red;
    }
`;

const SubmitButton = Styled.button`
    height: 48px;
    width: 230px;
    color: #fff;
    background-color: #1DB6BC;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 17px;
    font-family: ProximaBold, "Helvetica", "Arial", sans-serif;
    border: none;
    outline: none;
    margin-bottom: 80px;

    &:hover, &:active {
        background-color: rgb(22, 156, 160);
    }
`;