import React from "react";
import Slide from "react-reveal/Slide";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function Testimonials() {
  return (
    <div className="my-10 mx-10 ">
      <p className="font-bold sm:text-4xl text-2xl mx-auto text-center my-10">
        You deserve the best!
      </p>
      {/* <div className="lg:grid lg:grid-cols-3  gap-10 "> */}
      <div className="lg:w-2/5 mx-auto">
        {/* <Slide left>
          <Card className="w-50 h-auto mb-10 ">
            <CardBody className="text-left">
              <Typography className="font-semibold">
                Immaculatar Chisom is a great contributor. Her assistance to
                Azure Voice increased our company&apos;s value within three
                weeks of activeness. She will fit into any role in any
                organization because she works strictly with workflow and takes
                corrections. She is also a great listener that provides
                recommendations that optimize service delivery.
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-left justify-between py-3"
            >
              <img
                className="w-10 h-10 rounded-full"
                src={require("../assets/logo2.png")}
                alt="avatar"
              />
              <Typography variant="small" color="gray" className="pl-5">
                <p className="font-bold">-Amoo Isreal A</p>
                <p>Chairman Holdings, Azure Voice LLC.</p>
              </Typography>
            </CardFooter>
          </Card>
        </Slide> */}
        {/* <Slide left>
          <Card className="w-50 h-auto mb-10 ">
            <CardBody className="text-left">
              <Typography className="font-semibold">
                Immaculatar Chisom is a great contributor. Her assistance to
                Azure Voice increased our company&apos;s value within three
                weeks of activeness. She will fit into any role in any
                organization because she works strictly with workflow and takes
                corrections. She is also a great listener that provides
                recommendations that optimize service delivery.
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-left justify-between py-3"
            >
              <img
                className="w-10 h-10 rounded-full"
                src={require("../assets/logo2.png")}
                alt="avatar"
              />
              <Typography variant="small" color="gray" className="pl-5">
                <p className="font-bold">-Amoo Isreal A</p>
                <p>Chairman Holdings, Azure Voice LLC.</p>
              </Typography>
            </CardFooter>
          </Card>
        </Slide> */}
        <Slide left>
          <Card className="w-50 h-auto mb-10">
            <CardBody className="text-left">
              <Typography className="font-semibold">
                Immaculatar Chisom is a great contributor. Her assistance to
                Azure Voice increased our company&apos;s value within three
                weeks of activeness. She will fit into any role in any
                organization because she works strictly with workflow and takes
                corrections. She is also a great listener that provides
                recommendations that optimize service delivery.
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-left justify-between py-3"
            >
              <img
                className="w-10 h-10 rounded-full"
                src={require("../assets/logo2.png")}
                alt="avatar"
              />
              <Typography variant="small" color="gray" className="pl-5">
                <p className="font-bold">-Amoo Isreal A</p>
                <p>Chairman Holdings, Azure Voice LLC.</p>
              </Typography>
            </CardFooter>
          </Card>
        </Slide>
      </div>
      <div className="flex justify-center">
        <a href="/contact">
          <Button color="blue" size="md" className="my-3 ">
            <span className="text-white learn-btn normal-case">Contact me</span>
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Testimonials;
