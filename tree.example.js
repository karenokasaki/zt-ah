const tree = {
   name: "No sound on phone",
   info: "Tutorial to fix no sound on phone",
   id_tree: "1",
   nodes: [
      {
         id_node: "1",
         title: "No sound on phone",
         description: "No sound from call, text or notifications",
         root: true,
         question: "Is the volume set to maximum?",
         options: [
            {
               ref_node: "1",
               text: "Yes",
               next_node: "2",
            },
            {
               ref_node: "1",
               text: "No",
               next_node: "3",
            },
            {
               ref_node: "1",
               text: "I don't know",
               next_node: "4",
            },
         ],
         result: "processing",
      },
      {
         id_node: "2",
         title: "Yes, its on max volume",
         description:
            "Ok, let's check some settings to make sure everything its configured",
         root: false,
         question: "Is silent mode activated?",
         options: [
            {
               ref_node: "2",
               text: "Yes",
               next_node: "5",
            },
            {
               ref_node: "2",
               text: "No",
               next_node: "6",
            },
         ],
         result: "processing",
      },
      {
         id_node: "3",
         title: "No, its not on max volume",
         description:
            "Ok, let's try to increase the volume. Press the cell phone's side button until the cell phone's indicator shows the volume bar at maximum.",
         root: false,
         question: "Did the volume went up?",
         options: [
            {
               ref_node: "3",
               text: "Yes",
               next_node: "7",
            },
            {
               ref_node: "3",
               text: "No",
               next_node: "5",
            },
         ],
         result: "processing",
      },
      {
         id_node: "4",
         title: "I don't know",
         description:
            "Press the cell phone's side button until the cell phone's indicator shows the volume bar at maximum.",
         root: false,
         question: "Did the volume go up?",
         options: [
            {
               ref_node: "4",
               text: "Yes",
               next_node: "7",
            },
            {
               ref_node: "4",
               text: "No",
               next_node: "5",
            },
         ],
         result: "processing",
      },
      {
         id_node: "5",
         title: "Yes, silent mode is activated",
         description: `Swipe down from the top of the screen to open the notification shade.
         Look for the "Sound," "Vibrate," or "Do Not Disturb" icon. It might appear as a bell or a speaker icon, depending on your Android version.
         Tap the icon to toggle between silent mode and normal sound mode.`,
         root: false,
         question: "Did the volume return?",
         options: [
            {
               ref_node: "5",
               text: "Yes",
               next_node: "7",
            },
            {
               ref_node: "5",
               text: "No",
               next_node: "6",
            },
         ],
         result: "processing",
      },
      {
         id_node: "6",
         title: "No, silent mode is not activated",
         description: "Ok, let's try restart the phone",
         root: false,
         question: "Did the volume return?",
         options: [
            {
               ref_node: "6",
               text: "Yes",
               next_node: "7",
            },
            {
               ref_node: "6",
               text: "No",
               next_node: "8",
            },
         ],
         result: "processing",
      },
      {
         id_node: "7",
         title: "Yes, the volume returned",
         description: "Great! You have solved the problem",
         root: false,
         question: "",
         options: [],
         result: "success",
      },
      {
         id_node: "8",
         title: "No, the volume did not return",
         description: "Sorry, we could not solve the problem",
         root: false,
         question: "",
         options: [],
         result: "failure",
      },
   ],
};
