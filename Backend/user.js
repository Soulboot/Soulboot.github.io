//This Script is used to make the client data.
//script by soulboot(Debojyoti Ganguly)

let user = "userName";
let userCount = 0;
let userId = 0;
let PaymentData
{
    cardData =
    {
        cardNumber = "0000-0000-0000-0000",
        nameOnCard = "Name LastName",
        expDate = "00/00",
        sequrityCode = 000,
        provider = "Visa"
    }
}

function userCountUpdate()
{
    userCount += 1;
    userId = userCount;
}

