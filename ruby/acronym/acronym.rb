module Acronym
  def self.abbreviate(string)
    string.scan(/\b\w+\b/).map { |word| word[0] }.join.upcase
  end
end

module BookKeeping
  VERSION = 4
end
