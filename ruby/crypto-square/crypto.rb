class Crypto
  FILLER = '_'

  def initialize str
    @str = str
  end

  def normalize_plaintext
    @str.downcase.gsub /\W/, ''
  end

  def size
    Math.sqrt(normalize_plaintext.length).ceil
  end

  def plaintext_segments
    normalize_plaintext.chars.each_slice(size).map(&:join)
  end

  def ciphertext
    ps = plaintext_segments
    ps << ps.pop.ljust(size, FILLER)
    ps.map(&:chars).transpose.join.gsub /#{FILLER}/, ''
  end

  def normalize_ciphertext
    ciphertext.chars.each_slice(5).map(&:join).join(' ')
  end
end
