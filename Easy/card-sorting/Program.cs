using System;
using System.Collections.Generic;
using System.Linq;

namespace card_sorting
{
    public enum Faces {Numeric = 0, J=1,Q=2,K=3,A=4};
    public enum Suits {d=0, s=1, c=2, h=3};
    
    /// <summary>
    /// Contains fields for a Card object,
    /// and methods used to create, sort, and print lists of Card objects.
    /// </summary>
    public class Card{
        int rank;
        Faces face;
        Suits suit;

        /// <summary>
        /// Builds a Card object by extracting information
        /// from a string in the format "[rank][suit]".
        /// e.g cardString="3s" => this.rank=3, this.face=Numeric, this.suit=s
        /// </summary>
        public Card(string cardString){
            int cardStringLength = cardString.Length;

            string cardStringRank = cardString.Substring(0, cardStringLength-1);
            char cardStringSuit = cardString[cardStringLength-1];

            switch(cardStringRank){
                case "J":
                    this.rank = 11;
                    this.face = Faces.J;
                    break;
                case "Q":
                    this.rank = 12;
                    this.face = Faces.Q;
                    break;
                case "K":
                    this.rank = 13;
                    this.face = Faces.K;
                    break;
                case "A":
                    this.rank = 14;
                    this.face = Faces.A;
                    break;
                default:
                    this.rank = int.Parse(cardStringRank);
                    break;
            }

            switch(cardStringSuit){
                case 'd':
                    this.suit = Suits.d;
                    break;
                case 's':
                    this.suit = Suits.s;
                    break;
                case 'c':
                    this.suit = Suits.c;
                    break;
                case 'h':
                    this.suit = Suits.h;
                    break;                    
                default:
                    break;
            }
        }

        /// <summary>
        /// Returns a list of Card objects built from a list of strings
        /// in the format "[rank][suit]", e.g. {"3c", "Js", "2d"}.
        /// </summary>
        public static List<Card> buildCardList(List<string> cardStrings){
            List<Card> cardList = new List<Card>();

            foreach(string cardString in cardStrings){
                if(!cardString.Any()) continue;
                var newCard = new Card(cardString);
                cardList.Add(newCard);
            }

            return cardList;
        }

        /// <summary>
        /// Returns the list of Card objects passed in sorted by suit, then rank.
        /// </summary>        
        public static List<Card> sortCardList(List<Card> cardList){
            return cardList.OrderBy(s => s.suit).ThenBy(r => r.rank).ToList();
        }

        public static void printCardList(List<Card> cardList){
            if(!cardList.Any())
                return;

            for(int i=0; i<cardList.Count-1; i++){
                cardList[i].printCard();
                Console.Write(",");
            }
            cardList.Last().printCard();
            Console.Write('\n');
        }

        private void printCard(){
            if(this.rank<11){
                Console.Write("{0}{1}", this.rank, this.suit);
            }else{
                Console.Write("{0}{1}", this.face, this.suit);
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            List<string> cards = new List<string> {"3c", "Js", "2d", "10h", "Kh", "8s", "Ac", "4h"};
            Console.WriteLine(string.Join(",", cards));

            List<Card> cardList = Card.buildCardList(cards);
            
            cardList = Card.sortCardList(cardList);

            Card.printCardList(cardList);
        }
    }
}