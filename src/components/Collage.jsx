import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export default function Collage(props) {

  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 p-2">
        <CardHeader className="flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">{props.subtitle}</p>
          <h4 className="text-white font-medium text-large">{props.title}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="w-48 h-auto mx-auto"
          src={props.img1}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 p-2">
        <CardHeader className="flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">{props.subtitle2}</p>
          <h4 className="text-white font-medium text-large">{props.title2}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="w-48 h-auto mx-auto"
          src={props.img2}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 p-2">
        <CardHeader className="flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">{props.subtitle3}</p>
          <h4 className="text-white font-medium text-large">{props.title3}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="w-48 h-auto mx-auto"
          src={props.img3}
        />
      </Card>
      <Card  className="w-full h-[300px] col-span-12 sm:col-span-5">
        <CardHeader className="flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">{props.subtitle4}</p>
          <h4 className="text-white font-medium text-2xl">{props.title4}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="w-full h-auto my-auto"
          src={props.img4}
        />
      </Card>
      <Card  className="w-full h-[300px] col-span-12 sm:col-span-7">
        <CardHeader className="flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">{props.subtitle5}</p>
          <h4 className="text-white/90 font-medium text-xl">{props.title5}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="w-full h-auto"
          src={props.img5}
        />
      </Card>
    </div>
  );
}