class Phrase
  attr_reader :phrase

  def initialize str
    @phrase = str
  end

  def word_count
    phrase.scan(/[\w']+/).each_with_object(Hash.new(0)) { |e, a| a[e.downcase] += 1 }
  end
end
