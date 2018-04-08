class Round
  attr_reader :plays, :pins_on_the_lane

  def initialize
    @plays = []    
    @pins_on_the_lane = 10
  end

  def played?
    strike? || spare? || open_frame?
  end

  def strike?
    raise "not implemented"
  end

  def spare?
    raise "not implemented"
  end

  def open_frame?
    @plays[0] && @plays[1] &&
    ((0..9) === @plays[0]) && @plays[0] + @plays[1] < 10
  end

  def play(pins)
    raise "Pin count exceeds pins on the lane" if pins > @pins_on_the_lane
    (@pins_on_the_lane -= pins) and (@plays << pins)
  end

  def base_score
    plays.reduce(&:+)
  end
end

class StandardRound < Round
  def strike?
    @plays[0] &&
    @plays[0] == 10
  end

  def spare?
    @plays[0] && @plays[1] &&
    ((0..9) === @plays[0]) && (@plays[0] + @plays[1] == 10)
  end
end

class FinalRound < Round
  def strike?
    @plays[0] && @plays[1] && @plays[2] &&
    @plays[0] == 10
  end

    def spare?
    @plays[0] && @plays[1] && @plays[2] &&
    ((0..9) === @plays[0]) && (@plays[0] + @plays[1] == 10) 
  end

  def play(pins)
    super
    @pins_on_the_lane = 10 if pins == 10 || @plays.reduce(&:+) == 10
  end
end

class Game
  attr_reader :rounds

  def initialize
    @rounds = (Array.new(9) { StandardRound.new }) + [FinalRound.new]
  end

  def current_round
    @rounds.detect { |r| !r.played? }
  end

  def roll(pins)
    raise "Pins must have a value from 0 to 10" unless (0..10) === pins
    raise "Should not be able to roll after game is over" if game_over?
    current_round.play(pins)
  end

  def game_over?
    @rounds.all?(&:played?)
  end

  def score
    raise "Score cannot be taken until the end of the game" unless game_over?
    remaining_plays = -> (i, n) { @rounds[(i + 1)..-1].map(&:plays).flatten.first(n) }
    @rounds.map.with_index do |r, i|
      adjustment = if StandardRound === r && r.strike?
                     remaining_plays[i, 2].reduce(&:+)
                   elsif StandardRound === r && r.spare?
                     remaining_plays[i, 1].reduce(&:+)
                   else
                     0
                   end
      r.base_score + adjustment
    end.reduce(&:+)
  end
end


class BookKeeping
  VERSION = 1.1
end