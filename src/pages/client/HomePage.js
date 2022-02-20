import { Carousel } from "../../components/client/ui/Carousel";


export default function HomePage() {
  return (
    <div>

      <div className="grid grid-nogutter">
        <div className="col h-screen">
          <Carousel />
        </div>
      </div>
      <div className="grid grid-nogutter">
        <div className="col">
          <h1>Example</h1>
        </div>
      </div>

    </div>
  )
}
