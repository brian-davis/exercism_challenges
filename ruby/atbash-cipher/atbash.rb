module Atbash
  ALPHABET = ('a'..'z').to_a.join + ('0'..'9').to_a.join
  CIPHER   = ('a'..'z').to_a.join.reverse + ('0'..'9').to_a.join

  def self.encode(text)
    text.gsub(/\W/, '').downcase.tr(ALPHABET, CIPHER).chars.each_slice(5).map(&:join).join(" ")
  end
end