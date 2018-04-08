module Alphametics
  
  # Finished in 53.591068s, 0.1679 runs/s, 0.1679 assertions/s.
  def self.brute_force(input)
    characters = input.scan(/[A-Z]/).uniq
    number_permutations = (0..9).to_a.permutation(characters.length).lazy
    number_permutations.each do |permutation|
      input_as_numbers = input.tr(characters.join, permutation.join)
      next if /\b0\d+\b/ === input_as_numbers
      return characters.zip(permutation).to_h if eval(input_as_numbers)
    end
    {}
  end

  def self.solve(input)
    brute_force(input)
  end
end

module BookKeeping
  VERSION  = 4
end