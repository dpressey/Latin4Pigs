var vowels = "aeiou"

	alert("HELLO!, this is a piglatin translator. Simply enter in an engish word and press enter to see the translation");
	
	userChoice = prompt("please enter in the english word of your choice to be translated");
	
	result = isNaN(userChoice);
	
	
	if (userChoice != " " && result == true ) {
			firstLetter = userChoice.charAt(0);
			if (firstLetter == 'a' || firstLetter == 'e' || firstLetter == 'i' || firstLetter == 'o' || firstLetter == 'u'){
				vowelWord = userChoice + "ay";
				document.write("Translated word: " + vowelWord);			
			}
			else {
				newWord = userChoice.substr(1) + firstLetter + "ay";
				document.write("Translated word: " + newWord);
			}
	}
	else {
		alert("ERROR!, wrong input. Please reload the page to enter in a proper english word");	
	}	