import images from "./icons/day/*.png"

const Icon = ({ icon }) => {
  console.log(images)
  return <img alt="logo" src={`${images[icon]}`} />
}

export default Icon
