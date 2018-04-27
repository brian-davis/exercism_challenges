defmodule RotationalCipher do
  @doc """
  Given a plaintext and amount to shift by, return a rotated string.

  Example:
  iex> RotationalCipher.rotate("Attack at dawn", 13)
  "Nggnpx ng qnja"
  """
  @spec rotate(text :: String.t(), shift :: integer) :: String.t()
  def rotate(text, shift) do
    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s" ,"t", "u", "v", "w", "x", "y", "z"]
    alphabet_caps = Enum.map(alphabet, fn (e) -> String.upcase(e) end)

    alphabet_cycle = Stream.cycle(alphabet)
    alphabet_caps_cycle = Stream.cycle(alphabet_caps)

    rot = Enum.slice(alphabet_cycle, shift, length(alphabet))
    rot_caps = Enum.slice(alphabet_caps_cycle, shift, length(alphabet))

    str_list = String.graphemes(text)

    str_list |>
    Enum.map(fn (e) ->
      cond do
        alphabet |> Enum.member?(e) ->
          rot |> Enum.at(alphabet |> Enum.find_index(fn(f) -> e == f end))
        alphabet_caps |> Enum.member?(e) ->
          rot_caps |> Enum.at(alphabet_caps |> Enum.find_index(fn(f) -> e == f end))
        true ->
          e
      end
    end) |>
    Enum.join
  end
end
