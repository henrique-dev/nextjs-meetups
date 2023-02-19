import MeetupItem from "./MeetupItem";
import styles from "./MeetupList.module.css";
import MeetupModel from "@/models/meetup";

interface MeetupListProps {
  meetups: MeetupModel[];
}

const MeetupList = (props: MeetupListProps) => {
  return (
    <ul className={styles.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
