const getState = ({ getStore, setStore }) => {
	return {
		store: {
			meetups: [],
			events: [],
			meetupEvents: []
		},
		actions: {
			meetupEventsList: (meetupID, index) => {
				const store = getStore();

				var events = store.events.filter(event => {
					if (event.meta_keys._meetup == meetupID) return event;
				});

				return events;
			},

			findMeetUp: (item, index) => {
				const store = getStore();
				for (let i = 0; i < store.meetups.length; i++) {
					if (item == store.meetups[i].ID) {
						let meetupName = store.meetups[i].post_title;
						return meetupName;
					}
				}
			}
		}
	};
};

export default getState;
