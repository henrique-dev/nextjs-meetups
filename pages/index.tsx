import Head from "next/head";
import MeetupList from "@/components/meetups/MeetupList";
import { GetServerSideProps } from "next";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-46aetQK1z-U%2FVxE32yYWp4I%2FAAAAAAAAAZ0%2FfHsqsPKrhwoa7CClY9ggyrwqp6B4ZaXKQCK4B%2Fs1600%2FIMG-20150603-WA0001.jpg&f=1&nofb=1&ipt=0d3bad82b5d9e43a754cf225c99c3adebc4b0cc448f4598f038e446482cefbc9&ipo=images",
    address: "Paranapanema Avenue",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-46aetQK1z-U%2FVxE32yYWp4I%2FAAAAAAAAAZ0%2FfHsqsPKrhwoa7CClY9ggyrwqp6B4ZaXKQCK4B%2Fs1600%2FIMG-20150603-WA0001.jpg&f=1&nofb=1&ipt=0d3bad82b5d9e43a754cf225c99c3adebc4b0cc448f4598f038e446482cefbc9&ipo=images",
    address: "Paranapanema Avenue",
    description: "This is a second meetup",
  },
];

interface HomePageProps {
  meetups: [];
}

const HomePage = (props: HomePageProps) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React meetups!"/>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const req = context.req;
  const res = context.res;

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
};

// export const getStaticProps = async () => {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// };

export default HomePage;
