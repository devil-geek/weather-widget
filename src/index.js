import ReactDOM from "react-dom"
import Widget from "./Widget"

const widgetContainers = document.querySelectorAll(".weather-widget")

// Inject our widget component into each container
widgetContainers.forEach((div) => {
  ReactDOM.render(<Widget location={div.dataset.location} />, div)
})
