import React, { useRef } from "react";

import Card from "../ui/Card";
import styles from "./NewMeetupForm.module.css";
import MeetupModel from "@/models/meetup";

interface NewMeetupFormProps {
  onAddMeetup: (meetup: MeetupModel) => void;
}

const NewMeetupForm = (props: NewMeetupFormProps) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current!.value;
    const enteredImage = imageInputRef.current!.value;
    const enteredAddress = addressInputRef.current!.value;
    const enteredDescription = descriptionInputRef.current!.value;

    const meetup = new MeetupModel(
      "",
      enteredTitle,
      enteredImage,
      enteredDescription,
      enteredAddress
    );

    props.onAddMeetup(meetup);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
