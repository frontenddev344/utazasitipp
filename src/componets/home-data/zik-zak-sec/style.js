import styled from "@emotion/styled";
export const ZikZaksecWrapper = styled.div`


.mainWrapper {

    margin-bottom: 90px;
    .zik-inner {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1fr;
        gap: 25px;
        padding: 50px 0;

        .text-bar{
            p {
                color: #fff;
            }
        }

        .img_bar { 
            
            img {
                width: 100%;
                height: 350px;
                object-fit: cover;
                border: 5px solid #525050; 
            }
        }
    }
 
}
.postion-wrapper {
    position: relative;
    margin-bottom: 90px;

    .hotel-glry-content {
        width: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        left: 60%;
        top: 50%;
        height: 65%;
        background: #ffffffe0;
        display: flex;
        align-items: center;
        padding: 50px;
        p {
            color: #000;
            font-size: 21px;
            text-align: center;
        }
    
        }
        .postion-wrapper1 {
            img {
                width: 65%;
                height: 550px;
                object-fit: cover;
            }
    }
}

.content-wraper {
    position: relative;
    margin: 50px 0;

    .img_bar {
        img {
            width: 100%;
            height: 550px;
            object-fit: cover;  
        }
    }
    .text-wrapper {
        background: #ffffffe3;
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        width: 50%;
        height: 85%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 50px;
    }
}

`