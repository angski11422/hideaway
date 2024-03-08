import Link from "next/link";
import { Button } from "./ui/button";

const Styleguide = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          quaerat culpa magnam voluptatibus non dolorem aliquid error, esse
          incidunt, iste quibusdam dolor tenetur mollitia natus odit a rerum!
          Magnam, voluptates!
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <Link href="/">Link</Link>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </div>
    </div>
  );
};

export default Styleguide;
