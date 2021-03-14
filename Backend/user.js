//This Script is used to make the client data.
//script by soulboot(Debojyoti Ganguly)
//copyright 2021-2026

let user = "userName";
let userCount = 0;
let userId = 0;
let PaymentData
{
    cardData =
    {
        cardNumber :String = "0000-0000-0000-0000",
        nameOnCard :String = "Name LastName",
        expDate :String = "00/00",
        sequrityCode :Number = 000,
        provider :String = "other"
    };
    UserData = 
    {
        previousPurchasesAllCompleted = false,
    };
};

function userCountUpdate()
{
    userCount += 1;
    userId = userCount;
}

//Purchase Prosscessing
function PurchaceProsscessing()
{

};

