# https://en.wikipedia.org/wiki/List_of_poker_hands#High_card
class Card
  attr_accessor :value, :house

  def initialize(string)
    @string = string
  end

  def value
    @value ||= string[0]
  end

  def house
    @house ||= string[1]
  end
end

class Hand
  include Comparable

  attr_accessor :cards

  RANKS = [
    :five_of_a_kind,
    :straight_flush,
    :four_of_a_kind,
    :full_house,
    :flush,
    :straight,
    :three_of_a_kind,
    :two_pair,
    :one_pair,
    :high_card
  ].reverse

  def initialize(card_strings)
    @cards = card_strings.map { |e| Card.new(e) }
  end

  def rank
    case cards
    when five_of_a_kind?  then :five_of_a_kind
    when straight_flush?  then :straight_flush
    when four_of_a_kind?  then :four_of_a_kind
    when full_house?      then :full_house
    when flush?           then :flush
    when straight?        then :straight
    when three_of_a_kind? then :three_of_a_kind
    when two_pair?        then :two_pair
    when one_pair?        then :one_pair
    when high_card?       then :high_card
    else :nothing
    end
  end

  def rank_index
    RANKS.index(rank)
  end

  def <=>(other)
    self.rank_index <=> other.rank_index
  end

  def five_of_a_kind?
    false
  end

  def straight_flush?
    false
  end

  def four_of_a_kind?
    false
  end

  def full_house?
    false
  end

  def flush?
    false
  end

  def straight?
    false
  end

  def three_of_a_kind?
    false
  end

  def two_pair?
    false
  end

  def one_pair?
    false
  end

  def high_card?
    false
  end
end

class Poker
  def initialize(hands)
    @hands = hands
  end

  def best_hand
    @hands.max
  end
end

module BookKeeping
  VERSION = 2
end
