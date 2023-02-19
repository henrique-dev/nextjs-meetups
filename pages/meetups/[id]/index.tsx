import { GetStaticProps } from "next";
import MeetupDetails from "@/components/meetups/MeetupDetails";

type MeetupPageProps = {
  meetup: any;
};

const MeetupPage = (props: MeetupPageProps) => {
  return (
    <MeetupDetails
      id={props.meetup.id}
      title={props.meetup.title}
      image={props.meetup.image}
      description={props.meetup.description}
      address={props.meetup.address}
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          id: "m1",
        },
      },
      {
        params: {
          id: "m2",
        },
      },
    ],
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const id = context.params?.id;

  return {
    props: {
      meetup: {
        id: id,
        title: "A First Meetup",
        image:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-46aetQK1z-U%2FVxE32yYWp4I%2FAAAAAAAAAZ0%2FfHsqsPKrhwoa7CClY9ggyrwqp6B4ZaXKQCK4B%2Fs1600%2FIMG-20150603-WA0001.jpg&f=1&nofb=1&ipt=0d3bad82b5d9e43a754cf225c99c3adebc4b0cc448f4598f038e446482cefbc9&ipo=images",
        address: "Paranapanema Avenue",
        description: "This is a first meetup",
      },
    },
  };
};

export default MeetupPage;
