import { defineStore } from "pinia";
import { onSnapshot, collection, setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "@/js/firebase";

const notesCollectionRef = collection(db, "notes");

export const useStoreNotes = defineStore("storeNotes", {
	state: () => {
		return {
			notes: [],
		};
	},
	actions: {
		async getNotes() {
			onSnapshot(notesCollectionRef, (querySnapshot) => {
				let notes = [];
				querySnapshot.forEach((doc) => {
					let note = {
						id: doc.id,
						content: doc.data().content,
					};
					notes.push(note);
				});
				this.notes = notes;
			});
		},
		async addNote(newNoteContent) {
			let currentDate = new Date().getTime(),
				id = currentDate.toString();

			await setDoc(doc(notesCollectionRef, id), {
				contnet: newNoteContent,
			});
		},
		async deleteNote(idToDelete) {
			await deleteDoc(doc(notesCollectionRef, idToDelete));
		},
		updateNote(id, content) {
			let index = this.notes.findIndex((note) => note.id === id);
			this.notes[index].content = content;
		},
	},
	getters: {
		getNoteContent: (state) => {
			return (id) => {
				return state.notes.filter((note) => note.id === id)[0].content;
			};
		},
		totalNotesCount: (state) => {
			return state.notes.length;
		},
		totalCharactersCount: (state) => {
			let count = 0;
			state.notes.forEach((note) => {
				count += note.content.length;
			});
			return count;
		},
	},
});
