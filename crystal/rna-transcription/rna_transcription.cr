class RnaComplement
  COMPLEMENTS = {
    'C' => 'G',
    'G' => 'C',
    'T' => 'A',
    'A' => 'U',
  }

  def self.of_dna(strand)
    strand.chars.map { |c| COMPLEMENTS[c] }.join
  end
end

# class RnaComplement
#   REPLACEMENTS = {'G' => 'C', 'C' => 'G', 'T' => 'A', 'A' => 'U'}

#   def self.of_dna(seq)
#     seq.gsub(REPLACEMENTS)
#   end
# end
