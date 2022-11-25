import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import Footer from "../home/Footer";

function Services() {
  return (
    <div className="r-black">
      <div>
        <div className="services-cards py-10 px-10 pt-5">
          <p className="font-bold text-white text-center text-4xl mx-auto my-10 tracking-tight">
            MY SERVICES
          </p>
          <div className="lg:grid lg:grid-cols-3  gap-10 ">
            <Fade>
              <Card className="w-50 h-auto mb-10 ">
                <CardBody className="text-center">
                  <Typography className="text-center text-black text-2xl font-semibold">
                    Copywriting
                  </Typography>
                  <Typography className="text-black">
                    With a professional certificate in Persuasive Writing, I
                    guarantee you a copy that will <i>wow</i> your clients and
                    have them sailing with you. I have volunteered and worked as
                    a copywriter in various organizations.
                  </Typography>
                </CardBody>
              </Card>
            </Fade>
            <Fade>
              <Card className="w-50 h-auto mb-10 ">
                <CardBody className="text-center">
                  <Typography className="text-center text-black text-2xl font-semibold">
                    Ghostwriting
                  </Typography>
                  <Typography className="text-black">
                    I can help you write your books with ease with a spark of
                    just the right amount of emotions.
                  </Typography>
                </CardBody>
              </Card>
            </Fade>
            <Fade>
              <Card className="w-50 h-auto mb-10 ">
                <CardBody className="text-center">
                  <Typography className="text-center text-black text-2xl sm:tracking-0 tracking-tighter font-semibold">
                    Editing/ Proofreading
                  </Typography>
                  <Typography className="text-black">
                    I love reading and adding spice to the literature I get my
                    hands on. I&apos;m patient and can point out any form of
                    error. I&apos;ve edited and proofread two published books.
                  </Typography>
                </CardBody>
              </Card>
            </Fade>
            <Fade>
              <Card className="w-50 h-auto mb-10 ">
                <CardBody className="text-center">
                  <Typography className="text-center text-black text-2xl font-semibold">
                    Content Creation
                  </Typography>
                  <Typography className="text-black">
                    I&apos;m creative and imaginative. I can help your blog, and
                    website thrive with engaging contents. I&apos;ve worked with
                    several bloggers as a content creator.
                  </Typography>
                </CardBody>
              </Card>
            </Fade>
            <Fade>
              <Card className="w-50 h-auto mb-10 ">
                <CardBody className="text-center">
                  <Typography className="text-center text-black text-2xl font-semibold">
                    Research
                  </Typography>
                  <Typography className="text-black">
                    I run holistic research on any subject matter. I carefully
                    consider materials using various methods.
                  </Typography>
                </CardBody>
              </Card>
            </Fade>
            <Fade>
              <Card className="w-50 h-auto mb-10 ">
                <CardBody className="text-center">
                  <Typography className="text-center text-black text-2xl font-semibold">
                    Virtual Assistance
                  </Typography>
                  <Typography className="text-black">
                    I can do all your &quot;laundry&quot; virtually. I have
                    knowledge of Microsoft Office. Let me know how you&apos;ll
                    be needing my assistance.
                  </Typography>
                </CardBody>
              </Card>
            </Fade>
          </div>
          <div className="flex justify-center">
            <a href="/contact">
              <Button color="blue" size="md" className="my-3 ">
                <span className="text-white learn-btn normal-case">
                  HIRE ME
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
      {/* <hr className="border-t-2 w-24 my-auto border-black mx-auto mb-10" /> */}

      <div className="py-5">
        <p className="font-bold pl-5 flex justify-center text-xl tracking-tight pb-5">
          MY WRITING PROCESS
        </p>
        <div className="lg:grid lg:grid-cols-3 mx-4 gap-10 ">
          <Slide left>
            <div className="w-50 h-auto mb-10 ">
              <div className="text-center">
                <p className="mx-auto rounded-full border-2 border-blue-400 w-7 h-7 flex justify-center">
                  1
                </p>
                <p className="font-bold">Research</p>
                <p className="">
                  Before I start any work, I take time to research the subject
                  matter to get different perspectives on the subject.
                </p>
              </div>
              <hr className="border-t-2 w-24 my-auto border-blue-400 mx-auto my-10" />
            </div>
          </Slide>
          <Slide left>
            <div className="w-50 h-auto mb-10 ">
              <div className="text-center">
                <p className="mx-auto rounded-full border-2 border-blue-400 w-7 h-7 flex justify-center">
                  2
                </p>
                <p className="font-bold">Writing</p>

                <p className="">
                  I put the words together. A mixture of the client&apos;s line
                  of thought, research on the subject matter, and my spark,
                  births greatness.
                </p>
              </div>
              <hr className="border-t-2 w-24 my-auto border-blue-400 mx-auto my-10" />
            </div>
          </Slide>
          <Slide left>
            <div className="w-50 h-auto mb-10 ">
              <div className="text-center">
                <p className="mx-auto rounded-full border-2 border-blue-400 w-7 h-7 flex justify-center">
                  3
                </p>
                <p className="font-bold">Editing</p>

                <p className="">
                  I add the finishing touch to the work. I take time to go over
                  the work until I am satisfied with the outcome of my work.
                  Editing in baking is called icing. Great attention is needed.
                </p>
              </div>
              <hr className="border-t-2 w-24 my-auto border-blue-400 mx-auto my-10" />
            </div>
          </Slide>
        </div>

        <div className="flex justify-center">
          <a href="/contact">
            <Button color="blue" size="md" className="my-3">
              <span className="text-white learn-btn normal-case">HIRE ME</span>
            </Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
