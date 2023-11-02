import styled from "@emotion/styled";
import BannerImg from '../../../assests/sssjbhfjh.jpg';

export const BannerWrapper = styled.div`

.bannerMain {

    background-image: url(${BannerImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    position: relative;

    &::after {
        position: absolute;
        content: '';
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
    }
    .textwrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        position: relative;
        z-index: 9;

        h1, span {
            font-size: 58px;
            font-weight: 500;
            color: #fff;
            font-family: 'Cormorant Garamond', serif;

            span {
                color: #cca35e;
            }
        }
    }
}

`