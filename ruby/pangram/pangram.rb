class Pangram
  ALPHABET = ('a'..'z').to_a
  def self.is_pangram? str
    str.downcase.scan(/[a-z]/).uniq.sort == ALPHABET
  end
end

module BookKeeping
  VERSION = 2
end
