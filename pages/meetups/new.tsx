import NewMeetupForm from "@/components/meetups/NewMeetupForm"
import MeetupModel from "@/models/meetup"
import { useRouter } from "next/router"

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetup: MeetupModel) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetup),
      headers: {
        'Content-Type' : 'application/json'
      }
    });

    console.log(response);
    router.push('/');
  }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  )
}

export default NewMeetupPage;
