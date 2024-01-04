import { watch } from "vue";

export const useWatchCharacters = (valueToWatch, maxChars) => {
	watch(valueToWatch, (newValue) => {
		if (newValue.length === maxChars) {
			alert(`Only less thant ${maxChars} characters allowed`);
		}
	});
};
