#include <iostream>
#include <string>
using namespace std;

int main() 
{
    string answer;

    // FIRST VERIFICATION
    cout << "Enter Luke's one and only love: ";
    getline(cin, answer);

    while (answer != "Shan") 
    {

        if (answer == "Basti") 
        {
            cout << "\nOh yes, I love Basti, but IT'S NOT BASTI!!!\n";
        }
        else 
        {
            cout << "\nAccess denied! You're not Luke's one and only love!\n";
        }

        cout << "\nEnter again: ";
        if (!getline(cin, answer)) return 0;
    }

    cout << "\nFirst verification passed! ❤️\n\n";

    // SECOND VERIFICATION
    cout << "What's her birthday? (MM/DD/YY): ";
    if (!getline(cin, answer)) return 0;

    while (answer != "09/15/08") 
    {
        cout << "\nIncorrect birthday! Try again.\n";
        cout << "\nEnter again: ";
        if (!getline(cin, answer)) return 0;
    }

    cout << "\nSecond verification passed! ❤️\n\n";

    // THIRD VERIFICATION
    cout << "What's her cat's name?: ";
    if (!getline(cin, answer)) return 0;

    while (answer != "Yuki") 
    {
        cout << "\nIncorrect cat name! Try again.\n";
        cout << "\nEnter again: ";
        if (!getline(cin, answer)) return 0;
    }

    cout << "\nThird verification passed! ❤️\n";
    cout << "\nAccess granted! ❤️\n\n";

    // LOVE LETTER
    cout << R"(HAPPY 1ST MONTHSARY, MY ONE AND ONLY BABY SHANNALYN!! ❤️

It's been 30 days since I officially became yours and 117 days since I first met you, hihi. I'm looking forward to spending more and more days with you, hehe.

No amount of words could ever describe how grateful I am to have you in my life, my love. You've taken care of me and given me a kind of warmth I never thought I'd receive. You've always been genuine with me, and you've shown me that love doesn't always have to be painful. It can be gentle, comforting, and, most importantly, reciprocated.

I've carried so much pain and trauma from the past, yet somehow, just by being yourself, you've helped heal parts of me that I thought would always hurt. You never had to do any of that, and it was never your responsibility, but your presence alone has brought me so much peace and happiness.

I've spent so many days and nights with you, and I can genuinely say that I've been the happiest boy ever, all because of you. Ever since the beginning, I knew there was something special and different about you. I'm so happy we found the courage to confess our feelings to each other because now I get to be with the only person I want to spend forever with.

It's only our first month together, and we still have so many memories to make, moments to share, and years ahead of us. But I already know that I wouldn't want to experience any of it with anyone else. I'm genuinely so happy that it's you, and I want it to always be you.

Even before I knew what it felt like to have my soul sparked back to life, somehow, it was always meant to be you.

Happy first monthsary, my baby. I love you so much, and I'll keep choosing you every single day. ❤️

With all my love,
Luke ❤️

To my one and only, Shan.
)";

    return 0;
}