using System;
using System.Collections.Generic;

namespace card_sorting
{
    public class Card{
        public static List<string> sortCardsFromStringList(List<string> cardStrings){
            cardStrings = convertFaceCardsToNumbers(cardStrings);
            return cardStrings;
        }

        public static List<string> convertFaceCardsToNumbers(List<string> cardStrings){
            for(int i=0; i<cardStrings.Count; i++){
                char rank = cardStrings[i][0];
                char suit = cardStrings[i][1];

                if(char.IsDigit(rank))
                    continue;

                switch(rank){
                    case 'J':
                        cardStrings[i] = "11" + suit;
                        break;
                    case 'Q':
                        cardStrings[i] = "12" + suit;
                        break;
                    case 'K':
                        cardStrings[i] = "13" + suit;
                        break;
                    case 'A':
                        cardStrings[i] = "14" + suit;
                        break;
                    default:
                        break;
                }
            }
            return cardStrings;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            List<string> cards = new List<string> {"3c", "Js", "2d", "10h", "Kh", "8s", "Ac", "4h"};
            Console.WriteLine(string.Join(",", cards));
            cards = Card.sortCardsFromStringList(cards);
            Console.WriteLine(string.Join(",", cards));

        }
    }
}
