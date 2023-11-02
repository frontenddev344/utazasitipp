import styled from "@emotion/styled";

export const HeaderStyle = styled.header`



.headerBar {
  background: #000000db;
  padding: 30px 0;
  position: fixed;
  top: 0;
  z-index: 99;
  left: 0;
  right: 0;

    .headerWrapper {
        ${'' /* display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center; */}

          .logo {
            grid-colums: 1/2;
               img {
                width: 100%;
                max-width: 200px;
             }
          }
          ul.headerNav {
            grid-column: 2/3;
            justify-content: space-between;
            display: flex;
            li {
                margin: 0 20px;
                font-size: 22px;
                font-family: 'Cormorant Garamond',serif;
                a {
                  color: #f9d496;
                  transition: .3s;
                  &:hover{
                    color: #fff;
                  }
              }
        }
    }
}
}




${'' /* @media screen and (min-width: 991px){
  .hamburger-Icon {
    display: none;
  }
} */}


ul.headerNav {
    display: none !important;
}
.hamburger-Icon {
  text-align: right;

      svg{
        color: #fff;
    }
}
.headerNav.mobile-menu-link ul.headerNav {
    display: block !important;
    position: fixed;
    right: 0;
    background: #080808;
    top: 88px;
    bottom: 0;
    width: 50%;
    overflow: auto;
    padding-bottom: 400px;

  li {
    margin: 25px 20px;
}
}
@media screen and (max-width: 991px){

.hamburger-Icon {
  text-align: right;

      svg{
        color: #fff;
    }
}
.headerNav.mobile-menu-link ul.headerNav {
    display: block !important;
    position: fixed;
    right: 0;
    background: #080808;
    top: 88px;
    bottom: 0;
    
    width: 50%;
    overflow: auto;
    padding-bottom: 400px;

  li {
    margin: 40px 20px;
}
}

// media query end braket
}


`