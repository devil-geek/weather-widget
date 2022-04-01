import { css } from "@emotion/react"

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;500;700&display=swap");

  #weather_wrapper {
    width: 400px;
    margin: 100px auto;
  }
  .weatherCard {
    width: 400px;
    height: 200px;
    font-family: "Josefin Sans";
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-smooth: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .currentTemp {
    width: 220px;
    height: 200px;
    background: #1f1f26;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .currentWeather {
    width: 180px;
    height: 200px;
    background: rgb(237, 237, 237);
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .temp {
    font-size: 70px;
    text-align: center;
    display: block;
    font-weight: 300;
    color: rgb(255, 255, 255);
    padding: 20px 0 0;
  }
  .location {
    color: rgb(255, 255, 255);
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    display: block;
  }
  .conditions {
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    img {
      width: 100px;
      animation: float 4s ease-in-out infinite;
    }
    &.isDay {
      background: linear-gradient(#d0f0ff, #03a9f4);
    }
    background: linear-gradient(#a2beff, #021758);
  }
  .info {
    width: 180px;
    height: 50px;
    background: #100e1a;
    font-weight: 700;
    color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .rain {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      display: inline-block;
      margin-left: 0.5rem;
    }
  }
  .wind {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      display: inline-block;
      margin-left: 0.5rem;
    }
  }

  @keyframes float {
    0% {
      transform: scale(1); //translatey(0px);
    }
    50% {
      transform: scale(1.2); //translatey(-20px);
    }
    100% {
      transform: scale(1); //translatey(0px);
    }
  }
`
