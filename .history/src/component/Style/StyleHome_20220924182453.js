.main {
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.main::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 100%;
    background: linear-gradient(to top, #200016, transparent);
}

.main img {
    position: absolute;
    width: 100%;
    height: 100vh;
    object-fit: cover;
}

#moon2 {
    mix-blend-mode: screen;
    transform: translateY(80px);
    -webkit-transform: translateY(80px);
    -moz-transform: translateY(80px);
    -ms-transform: translateY(80px);
    -o-transform: translateY(80px);
}

.Shop {
    color: #fff;
    font-size: 25px;
    text-transform: uppercase;
    transform: translateY(-140px);
    -webkit-transform: translateY(-140px);
    -moz-transform: translateY(-140px);
    -ms-transform: translateY(-140px);
    -o-transform: translateY(-140px);
}

.content {
    color: #fff;
    padding: 30px;
    margin-top: 10px;
}

.content p {
    margin: 20px;
    font-size: 25px;
}

.content h2 {
    margin: 20px;
    padding: 15px;
    font-size: 30px;
    color: #333;
    border-radius: 20px;
    background: linear-gradient(#5a819c, #541d86);
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
}