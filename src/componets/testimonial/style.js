import styled from "@emotion/styled";

export const TestimoniaWrapper = styled.div`

section.mainTestiWrapper {
    .top-heading{
        h6 {
            font-size: 14px;
            font-weight: 500;
            padding: 0;
            margin: 0 0 5px 0;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #aaaaaa;
            font-family: "Poppins", sans-serif;
        }
        h5 {
            font-size: 36px;
            font-weight: 700;
            color: #cda45e;
        }
    }
    .testiMain {
        margin:50px 15px 0 15px;
            .testiText {
                h6 {
                    font-style: italic;
                    padding: 20px 20px 60px 20px;
                    background: #26231d;
                    position: relative;
                    border-radius: 6px;
                    height: 300px;
                    z-index: 1;
                    color: #fff;
                    font-size: 17px;
                
                }
            }
    }
    .testiImgBar {
        margin-left: 10px;
        z-index: 9;
        position: relative;
        img {
            width: 65px;
            height: 65px;
            border-radius: 50%;
            border: 5px solid #878787;
            margin-top: -25px;
        }
        h6 {
            font-size: 18px;
            font-weight: bold;
            margin: 15px 0 0px 0px;
            color: white;
        }
    }

    

}

`