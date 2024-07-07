const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById("results-div");
const input = document.getElementById("user-input");
const time = document.getElementById("time");
const date = new Date;
const validateNumber = (str) =>
    {
        const regex1 = /^[1]?\s?\d{3}-\d{3}-\d{4}$/;
        const regex2 = /^[1]\s?\(\d{3}\)\s?\d{3}-\d{4}$/;
        const regex3 = /^[1]\s\d{3}\s\d{3}\s\d{4}$/;
        const regex4= /^\(\d{3}\)\d{3}-\d{4}$/;
        const regex5 = /^\d{10}$/;
        const regexes = [regex1, regex2, regex3, regex4, regex5];
        return regexes.some( regex => regex.test(str));
    }
checkBtn.addEventListener('click', (e) => 
    {
        e.preventDefault();
        if(!input.value)
            {
                alert("Please provide a phone number");
                return;
            }
        else
        {
            if(validateNumber(input.value))
                {
                    output.insertAdjacentHTML("beforeend",`<p>Valid US number: ${input.value}</p><hr>`);
                }
            else
            {
                output.insertAdjacentHTML("afterbegin",`<p>Invalid US number: ${input.value}</p><hr>`);
            }
        }
    
    }
)

clearBtn.addEventListener('click', () =>
    {
        output.innerHTML = "";
        input.value = "";
    }
)

window.onload = () =>
    {
        if (date.getHours() >= 0 && date.getHours() < 12)
            {
                time.textContent = "Good Morning";
            }
        else if (date.getHours() >= 12 && date.getHours < 18)
            {
                time.textContent = "Good Afternoon";
            }
        else
        {
            time.textContent = "Good Evening";
        }
    }

