class Hamming
  def self.compute(strand_a, strand_b)
    strand_a_chars, strand_b_chars = strand_a.chars, strand_b.chars
    raise(ex: ArgumentError.new) unless strand_a_chars.size == strand_b_chars.size
    strand_a_chars.zip(strand_b_chars).count { |a, b| a != b }
  end
end
