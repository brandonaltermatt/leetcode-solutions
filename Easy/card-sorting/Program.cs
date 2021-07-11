using System;
using System.Collections.Generic;

namespace card_sorting
{
    public enum Suits {Diamond=0, Spade=1, Club=2, Heart=3};
    public class Card{
        int rank;
        Suits suit;
        
        public Card(string cardString){
            int length = cardString.Length;
            string rank = cardString.Substring(0, length-1);
            char suit = cardString[length-1];

            switch(rank){
                case "J":
                    this.rank = 11;
                    break;
                case "Q":
                    this.rank = 12;
                    break;
                case "K":
                    this.rank = 13;
                    break;
                case "A":
                    this.rank = 14;
                    break;
                default:
                    this.rank = int.Parse(rank);
                    break;
            }

                switch(suit){
                    case 'd':
                        this.suit = Suits.Diamond;
                        break;
                    case 's':
                        this.suit = Suits.Spade;
                        break;
                    case 'c':
                        this.suit = Suits.Club;
                        break;
                    case 'h':
                        this.suit = Suits.Heart;
                        break;                    
                    default:
                        break;
                }
        }

    }
    class Program
    {
        static void Main(string[] args)
        {
            List<string> cards = new List<string> {"3c", "Js", "2d", "10h", "Kh", "8s", "Ac", "4h"};
            Console.WriteLine(string.Join(",", cards));

            List<Card> cardList = new List<Card>();
            foreach(string card in cards){
                var Card = new Card(card);
                cardList.Add(Card);
            }

            //Console.WriteLine(string.Join(",", cards));
        }
    }
}
